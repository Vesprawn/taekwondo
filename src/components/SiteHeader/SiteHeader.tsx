import { Button } from '../Button/Button'

export const SiteHeader = () => {
  return (
    <div className="site-header">
      <h1>Tayside Taekwon-Do</h1>

      Follow us on <br />

      Book a free first session

      <Button buttonText={'BOOK NOW!'}/>
    </div>
  )
}