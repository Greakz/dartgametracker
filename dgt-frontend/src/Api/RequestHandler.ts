import {GETHttpApi, POSTHttpApi} from "./HttpApi";

export abstract class POSTRequestHandler<RequestBody, ResponseBody> extends POSTHttpApi {
    abstract fetch(body: RequestBody): Promise<ResponseBody>;
}

export abstract class GETRequestHandler<ResponseBody> extends GETHttpApi {
    abstract fetch(): Promise<ResponseBody>;
}