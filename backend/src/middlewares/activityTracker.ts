import { FastifyRequest, FastifyReply } from 'fastify'
import { ActivityService, ActivityType } from '../services/activity.service'

/**
 * Middleware to track activity after successful request
 */
export const activityTracker = (activityType: ActivityType) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    // Hook into the onSend lifecycle to track after successful response
    reply.addHook('onSend', async (request, reply, payload) => {
      // Only track successful responses (2xx status codes)
      if (reply.statusCode >= 200 && reply.statusCode < 300) {
        try {
          // Extract enrollmentId from request body or params
          const enrollmentId = 
            (request.body as any)?.enrollmentId || 
            (request.params as any)?.enrollmentId ||
            (request.params as any)?.id

          if (enrollmentId) {
            // Log activity asynchronously (don't block response)
            ActivityService.logActivity({
              enrollmentId,
              activityType,
              metadata: {
                path: request.url,
                method: request.method,
                timestamp: new Date().toISOString()
              }
            }).catch(error => {
              console.error('Failed to log activity:', error)
            })
          }
        } catch (error) {
          // Silently fail - don't break the request
          console.error('Activity tracking error:', error)
        }
      }

      return payload
    })
  }
}

/**
 * Helper to log activity directly (for use in route handlers)
 */
export async function logActivity(
  enrollmentId: string,
  activityType: ActivityType,
  metadata?: any
) {
  try {
    await ActivityService.logActivity({
      enrollmentId,
      activityType,
      metadata
    })
  } catch (error) {
    console.error('Failed to log activity:', error)
  }
}

