import { ResponseModel } from "../response-model/response-model.module";

export interface ListResponseModel<T> extends ResponseModel{
    results:T[];
}