/**
 * @packageDocumentation
 * @module api.functional
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

export * as omg from "./omg";
export * as api from "./api";

/**
 * @controller AppController.getHello()
 * @path GET /
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getHello
    (
        connection: IConnection
    ): Promise<getHello.Output>
{
    return Fetcher.fetch
    (
        connection,
        getHello.ENCRYPTED,
        getHello.METHOD,
        getHello.path()
    );
}
export namespace getHello
{
    export type Output = Primitive<string>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/`;
    }
}