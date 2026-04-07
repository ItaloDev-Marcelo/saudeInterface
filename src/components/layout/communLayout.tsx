import type { communLayouProps } from "../../type/CommunLayoutProps"

const CommunLayout = ({children, style}:communLayouProps) => {
  return (
    <div className={`${style} glass-effect`}>{children}</div>
  )
}

export default CommunLayout