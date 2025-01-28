import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import '@/nativewind.css'
import { categories } from '@/constants/data'

const Categories = () => {

  const [selectedCategory,setSelectedCategory] = useState (null);

  // @ts-ignore (used to disable the type safety for below line of code)
  const onPressSelectCategory = (cat)=>{
      setSelectedCategory(cat)
  }

  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal = {true}
    data={categories}
    keyExtractor={(item)=>item}
    renderItem={({item,index})=>(
      <TouchableOpacity className='bg-white mr-3 px-5 py-3 rounded-[30px] mt-4 border-[1px] border-gray-200'>
         <Text className='text-[18px] font-medium text-center'>{item}</Text>
      </TouchableOpacity>
    )}
    />

 
  )
}

export default Categories