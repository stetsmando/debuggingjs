fetch('/api/talks')
  .then(r => r.json())
  .then(talksList => {
    const talksElement = document.getElementById('talks')
    talksList.forEach((talk, i) => {
      talksElement.appendChild(createTalkElement({ ...talk, id: i }))
    })

    function createTalkElement (talk) {
      const { description, presenter, attending, title, id } = talk
      const talkHeaderElement = document.createElement('div')
      talkHeaderElement.classList.add('talk-header')
      talkHeaderElement.innerHTML = `
  <div><strong>${title}</strong> - ${presenter}</div>
  <div><em class="talk-attending">Attending: ${attending}</em></div>`
      talkHeaderElement.children[1].addEventListener('click', ({ target }) => {
        const updatedValue = target.innerHTML.indexOf('👍') > -1 ? '👎' : '👍'
        target.innerHTML = `Attending: ${updatedValue}`
        talk.attending = updatedValue

        fetch('/api/talk/:id/attending', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(talk)
        })
          .then(r => r.json())
          .then(r => console.log(`Talk: ${JSON.stringify(r, null, 2)}`))
      })

      const talkBodyElement = document.createElement('div')
      talkBodyElement.classList.add('talk-body')
      talkBodyElement.innerHTML = description

      const talkElement = document.createElement('div')
      talkElement.classList.add('talk')
      talkElement.setAttribute('id', id)

      talkElement.appendChild(talkHeaderElement)
      talkElement.appendChild(talkBodyElement)

      return talkElement
    }
  })
