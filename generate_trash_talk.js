function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const profession = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  if (!target) {
    return '請選擇一個職業'
  }

  let trashTalk = ''
  if (target === 'engineer') {
    trashTalk = '身為一個工程師' + sample(task.engineer) + sample(phrase) + '吧'
  }
  if (target === 'designer') {
    trashTalk = '身為一個設計師' + sample(task.designer) + sample(phrase) + '吧'
  }
  if (target === 'entrepreneur') {
    trashTalk = '身為一個創業家' + sample(task.entrepreneur) + sample(phrase) + '吧'
  }

  return trashTalk
}

module.exports = generateTrashTalk