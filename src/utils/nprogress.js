import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export const start = () => {
  Nprogress.start()
}

export const close = () => {
  Nprogress.done()
}