'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { backdropVariants, commandPaletteVariants } from '@/lib/animations'

type Command = {
  id: string
  group: string
  label: string
  action: () => void
}

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const close = useCallback(() => setOpen(false), [])

  const commands: Command[] = [
    { id: 'home',       group: 'Navigate', label: 'Home',          action: () => { router.push('/');              close() } },
    { id: 'experience', group: 'Navigate', label: 'Experience',    action: () => { router.push('/experience');    close() } },
    { id: 'work',       group: 'Navigate', label: 'Work',          action: () => { router.push('/work');          close() } },
    { id: 'blog',       group: 'Navigate', label: 'Blog',          action: () => { router.push('/blog');          close() } },
    { id: 'about',      group: 'Navigate', label: 'About',         action: () => { router.push('/about');         close() } },
    { id: 'uses',       group: 'Navigate', label: 'Uses (hidden)', action: () => { router.push('/uses');          close() } },
    { id: 'github',   group: 'Connect',  label: 'GitHub',        action: () => { window.open('https://github.com/prakharsing7', '_blank'); close() } },
    { id: 'linkedin', group: 'Connect',  label: 'LinkedIn',      action: () => { window.open('https://linkedin.com/in/prakharsingh10', '_blank'); close() } },
    { id: 'email',    group: 'Connect',  label: 'Email',         action: () => { window.location.href = 'mailto:prakharsing7@gmail.com'; close() } },
    { id: 'empact',   group: 'Projects', label: 'emPACT',        action: () => { router.push('/work/empact');   close() } },
    { id: 'forecast', group: 'Projects', label: 'FORECAST',      action: () => { router.push('/work/forecast'); close() } },
    { id: 'circles',  group: 'Projects', label: 'Circles',       action: () => { router.push('/work/circles');  close() } },
    {
      id: 'copy-email',
      group: 'Actions',
      label: 'Copy email address',
      action: () => { navigator.clipboard.writeText('prakharsing7@gmail.com'); close() },
    },
  ]

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase()),
      )
    : commands

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    acc[cmd.group] = [...(acc[cmd.group] ?? []), cmd]
    return acc
  }, {})

  const flat = Object.values(grouped).flat()

  useEffect(() => { setActiveIndex(0) }, [query])

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKeydown)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKeydown)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        flat[activeIndex]?.action()
      } else if (e.key === 'Escape') {
        close()
      }
    },
    [flat, activeIndex, close],
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 bg-bg/80" onClick={close} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="relative w-full max-w-[560px] bg-surface border border-border overflow-hidden"
            variants={commandPaletteVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={handleKeyDown}
          >
            <div className="border-b border-border px-4 flex items-center gap-3">
              <span className="font-mono text-small text-text-tertiary select-none">⌘K</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                aria-label="Search commands"
                className="flex-1 py-4 bg-transparent font-mono text-small text-text-primary placeholder:text-text-tertiary outline-none caret-accent"
              />
            </div>
            <div role="listbox" aria-label="Commands" className="max-h-[360px] overflow-y-auto py-2">
              {Object.entries(grouped).map(([group, cmds]) => (
                <div key={group}>
                  <div className="px-4 pt-4 pb-1 font-mono text-small text-text-tertiary tracking-widest uppercase">
                    {group}
                  </div>
                  {cmds.map((cmd) => {
                    const idx = flat.indexOf(cmd)
                    return (
                      <button
                        key={cmd.id}
                        role="option"
                        aria-selected={activeIndex === idx}
                        onClick={cmd.action}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full text-left px-4 py-2.5 font-mono text-small transition-colors border-l-2 ${
                          activeIndex === idx
                            ? 'bg-accent-dim text-text-primary border-accent'
                            : 'text-text-secondary hover:text-text-primary border-transparent'
                        }`}
                      >
                        {cmd.label}
                      </button>
                    )
                  })}
                </div>
              ))}
              {flat.length === 0 && (
                <div className="px-4 py-10 text-center font-mono text-small text-text-tertiary">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
