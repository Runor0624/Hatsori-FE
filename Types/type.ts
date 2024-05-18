export interface VisitTypeinfomation {
	id: number,
    title: string,
    description: string,
    userIp: string,
    createDate: string | Date
}

export interface NoticeAddTypeinfomation {
    userId: number;
	title: string
	description: string
	createDate: string
	id: number
}

export interface SignUpTypeinfomation {
    userId: string
	nickname: string
	password: string
	authority: string
	userprofileimage: string | File | null | any
}

export interface LoginTypeinfomation {
    userId: string
	password: string
}

export interface PostAddTypeinfomation {
	userId: number;
	title: string;
	description: string;
	postimage?:string | File | null | any
	likecount: number;
	dislikecount: string
}

export interface PostTypeinfomation {
	id: number
	userid: number
	title:string
	description : string
	postimage?: string | File | null | any
	likecount : string | number
	dislikecount : string
	createDate?: string
}