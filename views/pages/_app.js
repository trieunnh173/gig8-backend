import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../store'
import '../styles/root.scss';
import 'bootstrap/scss/bootstrap.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
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
        <Header></Header>
        <SideBar></SideBar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    )
  }
}