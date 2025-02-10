import localFont from 'next/font/local'
import "./globals.css";

const workSans = localFont({src : [
  {
    path: './fonts/workSans-Black.ttf',
    weight: '900',
    style: 'normal'
  },
  {
    path: './fonts/workSans-ExtraBold.ttf',
    weight: '800',
    style: 'normal'
  },
  {
    path: './fonts/workSans-Bold.ttf',
    weight: '700',
    style: 'normal'
  },
  {
    path: './fonts/workSans-SemiBold.ttf',
    weight: '600',
    style: 'normal'
  },
  {
    path: './fonts/workSans-Medium.ttf',
    weight: '500',
    style: 'normal'
  },
  {
    path: './fonts/workSans-Regular.ttf',
    weight: '400',
    style: 'normal'
  },
  {
    path: "./fonts/WorkSans-Black.ttf",
    weight: "900",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-Thin.ttf",
    weight: "200",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-ExtraLight.ttf",
    weight: "100",
    style: "normal",
  },
],
variable: "--font-work-sans",
})

export const metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
