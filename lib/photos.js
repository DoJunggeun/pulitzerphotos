export default () => null

let info = ["Year","Image","Photographer","Newspaper / Agency","Title / Description"];
export let photos = [
	["1942","https://en.wikipedia.org/wiki/File:Ford_Strikers_Riot.jpg","Milton Brooks","Detroit News","Ford Strikers Riot"],
	["1943","https://en.wikipedia.org/wiki/File:Water!_by_Frank_Noel.jpg","Frank Noel","Associated Press","Water!"],
["1944_1","https://en.wikipedia.org/wiki/Pulitzer_Prize_for_Photography#/media/File:Homecoming_by_Earle_Bunker.jpg","Earle L. Bunker","World-Herald (Omaha, Nebraska)","Homecoming"],
	["1944_2","https://en.wikipedia.org/wiki/File:Water!_by_Frank_Noel.jpg","Frank Filan","Associated Press","Tarawa Island"],
	["1945","https://en.wikipedia.org/wiki/File:Raising_the_Flag_on_Iwo_Jima,_larger_-_edit1.jpg","Joe Rosenthal","Associated Press","Raising the Flag on Iwo Jima"],
	["1947","https://en.wikipedia.org/wiki/File:Woman_jumps_from_Winecoff_Hotel.jpg","Arnold Hardy","Amateur photographer\n(Distributed by AP)","A woman leaping from a fire in the Winecoff Hotel."],
	["1948","https://en.wikipedia.org/wiki/File:Boy_Gunman_and_Hostage.jpg","Frank Cushing","Boston Traveler","Boy Gunman and Hostage"],
	["1949","https://en.wikipedia.org/wiki/File:Babe_Ruth_Bows_Out.jpg","Nathaniel Fein","New York Herald-Tribune","Babe Ruth Bows Out"],
	["1950","https://en.wikipedia.org/wiki/File:Near_Collision_at_Air_Show.jpg","Bill Crouch","Oakland Tribune","Near Collision at Air Show"],
	["1951","https://en.wikipedia.org/wiki/File:Flight_of_Refugees_Across_Wrecked_Bridge_in_Korea.jpg","Max Desfor","Associated Press","Flight of Refugees Across Wrecked Bridge in Korea."],
	["1952","https://en.wikipedia.org/wiki/File:Johnny_Bright_incident_(Robinson).jpg","John Robinson and Don Ultang","Des Moines Register","Drake University–Oklahoma A&M football game in which Drake player Johnny Bright's jaw was deliberately broken."],
	["1953","https://en.wikipedia.org/wiki/File:Adlai_Bares_His_Sole.jpg","William M. Gallagher","Flint Journal\n(Michigan)","Ex-Governor Adlai Stevenson with a hole in his shoe, taken during the 1952 presidential campaign."],
	["1954","https://en.wikipedia.org/wiki/File:Rescue_on_Pit_River_Bridge.jpg","Virginia Schau","Amateur photographer","Rescue on Pit River Bridge"],
	["1955","https://en.wikipedia.org/wiki/File:Tragedy_by_the_Sea.jpg","John L. Gaunt, Jr.","Los Angeles Times","Tragedy by the Sea"],
	["1956","https://en.wikipedia.org/wiki/File:Bomber_Crashes_in_Street.jpg","Staff","New York Daily News","Bomber Crashes in Street"],
	["1957","https://en.wikipedia.org/wiki/File:Andrea_Doria_sinking_2.jpg","Harry A. Trask","Boston Traveler","Sinking of the liner SS Andrea Doria"],
	["1958","https://en.wikipedia.org/wiki/File:Faith_and_Confidence.jpg","William C. Beall","The Washington Daily News (D.C.)","Faith and Confidence"],
	["1959","https://en.wikipedia.org/wiki/File:Wheels_of_Death.jpg","William Seaman","Minneapolis Star","Wheels of Death"],
	["1960","https://en.wikipedia.org/wiki/File:Last_rites_of_Jose_Rodriguez.jpg","Andrew Lopez","United Press International","Corporal of dictator Fulgencio Batista's army"],
	["1961","https://en.wikipedia.org/wiki/File:Tokyo_Stabbing.jpg","Yasushi Nagao","Mainichi Shimbun\n(Tokyo)\n(Distributed by UPI)","Tokyo Stabbing"],
	["1962","https://en.wikipedia.org/wiki/File:Serious_Steps.jpg","Paul Vathis","Associated Press","Serious Steps"],
	["1963","https://en.wikipedia.org/wiki/File:Aid_from_the_Padre.jpg","Héctor Rondón","La República\n(Caracas, Venezuela)\n(Distributed by AP)","Aid from the Padre"],
	["1964","https://en.wikipedia.org/wiki/File:Ruby_shoots_Oswald.jpg","Robert H. Jackson","Dallas Times-Herald","Jack Ruby shooting Lee Harvey Oswald."],
	["1965","https://en.wikipedia.org/wiki/File:Ruby_shoots_Oswald.jpg","Horst Faas","Associated Press","War in South Vietnam during 1964."],
	
	["1966","https://en.wikipedia.org/wiki/File:Flee_to_Safety.jpg","Kyoichi Sawada","United Press International","Flee to Safety"],
	["1967","https://en.wikipedia.org/wiki/File:James_Meredith_wounded.jpg","Jack R. Thornell","Associated Press","Civil rights activist James Meredith lying wounded on a road in Mississippi after having been shot by a roadside gunman."]]

export function getAllPostIds() {
  return photos.map(photo => {
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
  for (let i = 0 ; i < photos.length; i++ ) {
	  if (photos[i].includes(id)) {
		  if (photos[i+1] == undefined) {
			  return {
				  id,
				  author:photos[i][2],
				  news:photos[i][3],
				  title:photos[i][4],
				  next:'?#photos',
				  previous:photos[i-1][0],
		  }
		  }
		  if (photos[i-1] == undefined) {
			  return {
				  id,
				  author:photos[i][2],
				  news:photos[i][3],
				  title:photos[i][4],
				  next:photos[i+1][0],
				  previous:'?#photos',
			  }
		  }
		  return {
			  id,
			  author:photos[i][2],
			  news:photos[i][3],
			  title:photos[i][4],
			  next:photos[i+1][0],
			  previous:photos[i-1][0],
		  }
		  break;
	  }
  }
}

