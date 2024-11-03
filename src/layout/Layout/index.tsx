import style from './style.module.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={style.main}>
      <div className={style.layout}>{children}</div>
      <footer className={style.footer} />
    </main>
  )
}
