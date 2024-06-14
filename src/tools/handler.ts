export const createResponse = (props = {}): IpcHandle.IResponse => {
    return {
        ...props,
        data: {},
    }
}
export const createError = (
    error?: Error | unknown
): IpcHandle.IError | undefined => {
    return error instanceof Error
        ? {
              name: error.name,
              message: error.message,
          }
        : undefined
}
export default {
    createResponse,
    createError,
}
