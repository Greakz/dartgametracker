import {HttpApi} from "./HttpApi";
import {store} from "../index";

export abstract class RequestHandler<RequestBody, ResponseBody> extends HttpApi {
    abstract fetch(body: RequestBody): Promise<ResponseBody>;
    protected authenticateRequest() {
        store.getState()
    }
}