import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/graphic-designing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/graphic-designing"!</div>
}
