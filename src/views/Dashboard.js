import { Link, Redirect, useParams } from 'react-router-dom'
import { useStudents } from 'hooks/useStudents'
import { Title } from 'components/atoms/Title/Title'
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles'
import StudentsList from 'components/organisms/UsersList/StudentsList'

const Dashboard = () => {
  const { id } = useParams()
  const { groups } = useStudents()
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />

  return (
    <Wrapper>
      <nav>
        <TitleWrapper>
          <Title as="h2">Group:{id}</Title>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </TitleWrapper>
      </nav>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  )
}

export default Dashboard
