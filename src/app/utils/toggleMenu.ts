'use client'

export function toggleMenu () {
  const aside = document.querySelector('.aside-workspace')
  const pageWorkspace = document.querySelector('.page-workspace')
  const asideWorkspaceSpan = document.querySelectorAll('.aside-workspace-span') 
  const linkWorkspace = document.querySelectorAll('.a-aside-workspace') 
  
  // justify-center
  for (let span of Array.from(asideWorkspaceSpan)) {
    span.classList.toggle('hidden')
  }

  for (let link of Array.from(linkWorkspace)) {
    link.classList.toggle('justify-center')
  }

  pageWorkspace?.classList.toggle('col-span-14')
  pageWorkspace?.classList.toggle('col-span-15')

  aside?.classList.toggle('col-span-2')
  aside?.classList.toggle('col-span-1')
}