import Image from "next/image";
import styles from "../styles/Home.module.css"

export default function Card({ title, imgSrc, desc }) {

    return (
        <div className={`shadow-3xl p-6 rounded-2xl relative mx-auto ${styles.card}`}>
            <div className="-translate-x-1/2 left-1/2 absolute -top-16">
                <Image src={imgSrc} width={150} height={150} layout="intrinsic" alt="icon" />
            </div>
            <div className="mt-10">
                <h1 className="text-lg py-4">{title}</h1>
                <p className="font-light">{desc}</p>
            </div>
        </div>
    )
}