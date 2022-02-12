
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SigninLocalInput {
    email: string;
    password: string;
}

export class SignUpLocalInput {
    email: string;
    password: string;
    confirmPassword: string;
}

export class CreateRecipeInput {
    title: string;
    content?: Nullable<string>;
    published?: Nullable<boolean>;
    authorId?: Nullable<number>;
}

export class UpdateRecipeInput {
    id: number;
    title: string;
    content?: Nullable<string>;
    published?: Nullable<boolean>;
    authorId?: Nullable<number>;
}

export class Auth {
    email: string;
    password: string;
}

export class Token {
    accessToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
}

export abstract class IMutation {
    abstract signinLocal(loginInput?: Nullable<SigninLocalInput>): Token | Promise<Token>;

    abstract signUpLocal(signUpLocalInput?: Nullable<SignUpLocalInput>): Token | Promise<Token>;

    abstract refreshToken(): Token | Promise<Token>;

    abstract logOut(): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createRecipe(createRecipeInput: CreateRecipeInput): Recipe | Promise<Recipe>;

    abstract updateRecipe(updateRecipeInput: UpdateRecipeInput): Recipe | Promise<Recipe>;

    abstract removeRecipe(id: number): Nullable<Recipe> | Promise<Nullable<Recipe>>;
}

export class Author {
    email?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class Recipe {
    id?: Nullable<number>;
    title: string;
    content?: Nullable<string>;
    published?: Nullable<boolean>;
    authorId?: Nullable<number>;
    author?: Nullable<Author>;
}

export abstract class IQuery {
    abstract recipes(): Nullable<Recipe>[] | Promise<Nullable<Recipe>[]>;

    abstract recipe(id: number): Nullable<Recipe> | Promise<Nullable<Recipe>>;
}

type Nullable<T> = T | null;
