import { useState } from 'react'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'

type Picture = {
  uri: string
  type: string
  size: number
  name: string
}

const picker = (width = 512, height = 512) => {
  const [picture, setPicture] = useState<Picture | null>(null)
  const [pictures, setPictures] = useState<ImageOrVideo[] | null>(null)
  const [closeModal, setCloseModal] = useState(false)

  const handleSetImage = (image: ImageOrVideo) => {
    setCloseModal(true)

    setPicture({
      uri: image.path,
      type: image.mime,
      size: image.size,
      name: Date.now() + '.jpg',
    })
  }

  const openPicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        handleSetImage(image)
      })
      .then(() => {
        setCloseModal(false)
      })
  }

  const openMultiPicker = () => {
    ImagePicker.openPicker({
      width: 360,
      height: 360,
      multiple: true,
    })
      .then(images => {
        setCloseModal(true)
        setPictures(images)
      })
      .then(() => setCloseModal(false))
  }

  const openCamera = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        handleSetImage(image)
      })
      .then(() => setCloseModal(false))
  }

  const cleanUp = () => {
    setPicture(null)
  }

  return {
    picture,
    pictures,
    closeModal,
    openPicker,
    openMultiPicker,
    openCamera,
    cleanUp,
  }
}

export default picker
