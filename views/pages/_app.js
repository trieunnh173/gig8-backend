import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../store'
import 'bootstrap/scss/bootstrap.scss';
import '../styles/root.scss';
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
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"></link>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

        </Head>
        <Header></Header>
        <SideBar></SideBar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    )
  }
}