import { cx } from '../../utils/helpers'

export default function Divider({ className }) {
  return <hr className={cx('rule border-0', className)} />
}
