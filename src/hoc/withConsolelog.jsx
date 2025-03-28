import { useEffect } from "react"

export const withConsoleLog = (Component) => {

  const ComponenteMejorado = () => {

      useEffect(() => {
          console.log('Mensaje desde el withConsoleLog')
      }, [])

      return <Component />
  }


  return ComponenteMejorado
}