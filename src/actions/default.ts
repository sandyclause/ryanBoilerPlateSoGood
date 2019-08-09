import {
  IAction,
} from '../Interfaces';
import {
  Record, List,
} from 'immutable';
import { IProduct } from '../interfaces/Product';

export default {};

export enum DefaultActionTypes {
  ADD_USER = 'ADD_USER',
  ADD_TODO = 'ADD_TODO',
  ADD_CAT_FACT = 'ADD_CAT_FACT',
  GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED',
  GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED',
  GET_TRENDS_REQUESTED = 'GET_TRENDS_REQUESTED',
  GET_TRENDS_SUCCEEDED = 'GET_TRENDS_SUCCEEDED',
  GET_TRENDS_FAILED = 'GET_TRENDS_FAILED',
  GET_SEARCH_PRODUCT_REQUESTED = 'GET_SEARCH_PRODUCT_REQUESTED',
  GET_SEARCH_PRODUCT_SUCCEEDED = 'GET_SEARCH_PRODUCT_SUCCEEDED',
}

export interface IUser {
  id: number;
  name: string;
}

export const UserFactory = Record<IUser>({
  id: -1,
  name: '',
});

export interface ITodo {
  id:  number;
  userId: number;
  title: string;
}

export const TodoFactory = Record<ITodo>({
  id: -1,
  userId: -1,
  title: 'untitled',
});

export class AddUserAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_USER;
  constructor(
    public payload: {
      user: Record<IUser>,
    }
  ) {}
}

export class AddTodoAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_TODO;
  constructor(
    public payload: {
      userId: number,
      todo: Record<ITodo>,
    }
  ) {}
}

export class AddCatFactAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_CAT_FACT;
  constructor(
    public payload: {
      userId: number,
      todo: Record<ITodo>,
    }
  ) {}
}

export class GetProductsAction implements IAction {
  public readonly type = DefaultActionTypes.GET_PRODUCTS_REQUESTED;
  constructor(
    public payload: {
      itemId: number
    }
  ) {}
}

export class GetProductsSucceeded implements IAction {
  public readonly type = DefaultActionTypes.GET_PRODUCTS_SUCCEEDED;
  constructor(
    public payload: List<Record<IProduct>>
  ) {}
}

export class GetTrendsAction implements IAction {
  public readonly type = DefaultActionTypes.GET_TRENDS_REQUESTED;
  constructor(
  ) {}
}

export class GetTrendsSucceededAction implements IAction {
  public readonly type = DefaultActionTypes.GET_TRENDS_SUCCEEDED;
  constructor(
    public payload: List<Record<IProduct>>
  ) {}
}

export class GetSearchProduct implements IAction {
  public readonly type = DefaultActionTypes.GET_SEARCH_PRODUCT_REQUESTED;
  constructor(
    public payload: {
      query: string
    }
  ) {}
}

export class GetSearchProductSucceeded implements IAction {
  public readonly type = DefaultActionTypes.GET_SEARCH_PRODUCT_SUCCEEDED;
  constructor(
    public payload: List<Record<IProduct>>
  ) {}
}
