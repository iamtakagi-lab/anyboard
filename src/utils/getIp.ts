import publicIp from 'public-ip'

export default async () => {
    return await publicIp.v4()
}