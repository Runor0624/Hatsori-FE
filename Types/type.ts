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