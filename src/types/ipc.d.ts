namespace IpcHandle {
    interface IResponse {
        data: object
        error?: IError
    }
    interface IError {
        name: string
        message: string
    }
}
namespace IpcPayload {
    namespace Domain {
        interface HealthCheck {
            id: string
            ip: string
            port: number
        }
    }
}
