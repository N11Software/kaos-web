import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import loginStyles from '../styles/Login.module.css'

const Login: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kaos</title>
				<meta name="description" content="Kaos, your place to create, discuss, and play your game." />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
			</Head>

			<main className={styles.main}>
				<header className={styles.header}>
					<h1 className={styles.headerLogo}>KAOS</h1>
					<div className={styles.headerLinks}>
						<a className={styles.headerLink} href="store/">STORE</a>
						<a className={styles.headerLink} href="community/">COMMUNITY</a>
						<a className={styles.headerLink} href="http://localhost:3000">ABOUT</a>
					</div>
					<div className={styles.headerLogin}>
						<a className={styles.headerLoginLink} href="login/">LOGIN</a>
					</div>
				</header>
				<h1 className={loginStyles.title}>SIGN IN</h1>
				<form name='logon' method='POST' className={loginStyles.loginForm} >
					<div className={loginStyles.loginRow}>
						<div className={loginStyles.inputTitle}>Kaos Username</div>
						<input className={loginStyles.textField} type='text' name='username' />
					</div>
					<div className={loginStyles.loginRow}>
						<div className={loginStyles.inputTitle}>Password</div>
						<input className={loginStyles.textField} type='password' name='password' autoComplete='off' />
					</div>
				</form>
				<div className={loginStyles.loginBtnCtn}>
					<div className={loginStyles.loginBtnSignIn}>
						<button type='submit' className={loginStyles.loginBtn}>SIGN IN</button>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="https://n11software.com">
					<Image src="/images/N11-Logo-Alternate-Transparent.png" width={75} height={50} />
				</a>
				<p className={styles.footerCopyright}>Copyright © N11 Software. All rights reserved. All trademarks are property of their respective owners in the US and other countries.</p>
			</footer>
		</div >
	)
}

export default Login