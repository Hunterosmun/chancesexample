import * as Ui from './ui'
import pic from './Chance.jpeg'

export default function App () {
  return (
    <Ui.Background>
      <Ui.Wrapper>
        <Ui.MainTitle>Chance Merritt</Ui.MainTitle>
        <Ui.Subtitle>Data Analyst Extraodinaire</Ui.Subtitle>
        <Ui.Topbox>
          <p>
            <h3>About</h3>
            Here is where we would put a nice description about Chance. Like
            details about how awesome he is! Or how chill and fun of a dude he
            is. Maybe some detail about his personal life, or where he was
            raised? Oooh, putting in details about where he went to
            school/learned all of his awesomeness is probably key. Other deets.
          </p>
          <img src={pic} alt='Chance Merritt' width='300px' height='300px' />
        </Ui.Topbox>
        <div>
          <p>Chances Projects</p>
          <Ui.FancyLink
            href='https://github.com/SirChancealot?tab=repositories'
            target={'_blank'}
            rel='noreferrer'
          >
            Chance's Cool Data
          </Ui.FancyLink>
        </div>
      </Ui.Wrapper>
    </Ui.Background>
  )
}
