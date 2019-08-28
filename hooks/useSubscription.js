import { useState, useEffect, useRef } from 'react'

export default function hook_useSubscription(pubName, ...subOpts) {
  const [loading, setLoading] = useState(true)
  let comp = useRef(null)
  let handle = useRef(null)

  const stopComp = () => {
    if (comp.current) {
      comp.current.stop()
      comp.current = null
    }
    if (handle.current) {
      handle.current.stop()
      handle.current = null
    }
  }

  useEffect(() => {
    stopComp()
    Tracker.autorun((currentComp) => {
      comp.current = currentComp

      handle.current = Meteor.subscribe(pubName, ...subOpts)
      setLoading(!handle.current.ready())
    })
    return stopComp
  }, [pubName, ...subOpts])

  return loading
}
