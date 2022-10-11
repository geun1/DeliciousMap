import { Map } from 'react-kakao-maps-sdk'
import styled from 'styled-components'

interface MappingProps {}

const Mapping: React.FC<MappingProps> = () => {
  return (
      <Map
      center={{
          lat: 37,
          lng: 127,
      }}
      style={{
          width: '800px',
          height: '1000px'
      }}
      level={12}/>
  );
}

export default Mapping