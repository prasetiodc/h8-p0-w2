function konversiMenit(menit){
	var minute = Math.floor(menit/60)
	var second = menit % 60
	
	if (second < 10){
		return minute + ':0' + second
	}else{
		return minute + ":" + second
	}
}
	
console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))