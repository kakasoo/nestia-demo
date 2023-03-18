/**
 * @packageDocumentation
 * @module api.functional.api.v1.user.4
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

/**
 * 제목
 * 
 * @controller UsersController.getHello4()
 * @path GET /api/v1/user/4
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getHello4
    (
        connection: IConnection
    ): Promise<getHello4.Output>
{
    return Fetcher.fetch
    (
        connection,
        getHello4.ENCRYPTED,
        getHello4.METHOD,
        getHello4.path()
    );
}
export namespace getHello4
{
    export type Output = Primitive<"hello4">;

    export const METHOD = "GET" as const;
    export const PATH: string = "/api/v1/user/4";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/api/v1/user/4`;
    }
}