namespace IpcHandle {
    interface IResponse {
        data: object
        error?: IError
    }
    interface IError {
        name: string | null
        message: string | null
    }
}
namespace IpcPayload {
}
