import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';
import cls from './ErrorBoundary.module.scss';

type ErrorBoundaryProps = {
    children: ReactNode;
}

type ErrorBoundaryState = {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(errorInfo)
    }

    render() {
      const {hasError} = this.state;
      const {children} = this.props
      if (hasError) {
        return <PageError/>
      }

      return children;
    }
  }
