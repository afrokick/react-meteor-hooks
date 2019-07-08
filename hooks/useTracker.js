import { useState, useEffect, useRef } from 'react'
import { Tracker } from 'meteor/tracker'

export default function hook_useTracker(trackerFun, deps=[]) {
  const [res, setRes] = useState(trackerFun())
  let comp = useRef(null)
  const stopComp = () => {
    comp.current && comp.current.stop()
    comp.current = null
  }

  useEffect(() => {
    stopComp()
    Tracker.autorun((currentComp) => {
      comp.current = currentComp
      setRes(trackerFun())
    })
    return stopComp
  }, deps)

  return res
}
