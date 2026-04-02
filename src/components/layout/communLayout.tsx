import type { communLayouProps } from "../../type/CommunLayoutProps"

const communLayout = ({children, style}:communLayouProps) => {
  return (
    <div className={style}>{children}</div>
  )
}

export default communLayout