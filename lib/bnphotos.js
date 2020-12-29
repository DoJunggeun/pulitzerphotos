export default () => null

let info = ["Year","Photographer","Newspaper / Agency","Title / Description"];
export let bnphotos = []

export function getAllPostIds() {
  return bnphotos.map(photo => {
	  return {
		  params: {
			  id: photo[0]
		  }
	  }
	  
  })

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // return fileNames.map(fileName => {
  //   return {
  //     params: {
  //       id: fileName.replace(/\.md$/, '')
  //     }
  //   }
  // })
}

export function getPostData(id) {
  for (let i = 0 ; i < bnphotos.length; i++ ) {
	  if (bnphotos[i].includes(id)) {
		  return {
			  id,
			  author:bnphotos[i][1],
			  news:bnphotos[i][2],
			  title:bnphotos[i][3]
		  }
		  break;
	  }
  }
}

