import useFirestore from "../hooks/useFirestore"
import { motion } from "framer-motion"

const ImageList = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs)

    return (
        <div className="img-container">
            { docs && docs.map(doc => (
                <motion.div
                    className="img-wrap"
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                <motion.img src={doc.url} alt="my image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageList
