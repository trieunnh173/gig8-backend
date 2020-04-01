import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../store'
import '../styles/root.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Head>
          <title>Gig8</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    )
  }
}