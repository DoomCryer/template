export interface HelloWorldStore {
  message: string;
  loading: boolean;
  error: string;
}

export interface OwnProps {
  locale?: string;
}

export interface StateProps {
  message: string;
}

export interface DispatchProps {
  sayHello: (name: string) => void;
  sayHelloFromServer: (name: string) => void;
}

export type Props = StateProps & DispatchProps & OwnProps;
