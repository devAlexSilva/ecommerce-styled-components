import { PropsProgressBar } from "@/types/PropsProgressBar"
import styled from "styled-components"

export default function ProgressBar({ totalPriceProductCart }: PropsProgressBar) {

  const promotionFreeFreight = 200

  const Container = styled.div`
    progress {
      min-height: 1.5rem;
      width: 100%;
    }
   
  `
  return (
    <Container>
      <progress value={totalPriceProductCart} max={promotionFreeFreight} />
    </Container>
  )
}
