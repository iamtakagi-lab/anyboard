import React, { useState } from "react"
import { BiPaperPlane } from "react-icons/bi"
import { useToasts } from "react-toast-notifications"
import { useBackend } from "../../hooks/backend"

export const PostCreateButton: React.VFC<{}> = () => {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState("")

    const client = useBackend()
    const toasts = useToasts()

    const create = async () => {
        setShowModal(false)
        client.createPost({
            text: text
        }).then((res) => {
            setText("")
            location.reload()
            if (res.success) {
                toasts.addToast("投稿しました", {
                    appearance: "success",
                    autoDismiss: true,
                });
            } else {
                toasts.addToast("投稿に失敗しました", {
                    appearance: "error",
                    autoDismiss: true,
                });
            }
        })
    }

    return (
        <>
            <button
                className="h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                onClick={() => {
                    setShowModal(true)
                }}
            >
                <BiPaperPlane />
            </button>

            {
                showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-full bg-white outline-none focus:outline-none">

                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-black text-3xl font-semibold">
                                            今、何してる❓
                                        </h3>
                                        <button
                                            className="text-black p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="text-black my-4 text-lg leading-relaxed">
                                            なんか書き込んでみましょう 文字数: {text.length} / 500
                                        </p>
                                        <textarea
                                            className="form-input mt-1 block w-full border-solid border-2 rounded-md"
                                            value={text}
                                            onChange={(event) => setText(event.target.value)}
                                        />
                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-black font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            閉じる
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => { create() }}
                                        >
                                            投稿
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
        </>
    )
}