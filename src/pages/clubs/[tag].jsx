import api from "../../services/api"

import ClubInfo from "../../components/ClubInfo"

const ClubPerfil = ({ clubData }) => {
  if (!clubData) {
    return <></>
  }

  return <ClubInfo clubData={clubData} />
}

export const getServerSideProps = async ctx => {
  const { tag } = ctx.params

  try {
    const response = await api.get(`clubs/%23${tag}`)
    const clubData = response.data

    return {
      props: {
        clubData,
      },
    }
  } catch (err) {
    return {
      props: {
        clubData: null,
      },
    }
  }
}

export default ClubPerfil
