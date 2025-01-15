import { TrolleyIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'intro',
      title: 'Product Intro',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Hot', value: 'hot' },
          { title: 'Sale', value: 'sale' },
        ],
      },
    }),
    defineField({
      name: 'variant',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Tshirt', value: 'tshirt' },
          { title: 'Pants', value: 'pants' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Shorts', value: 'shorts' },
          { title: 'Others', value: 'others' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      const image = media && media[0]
      return {
        title: title,
        subtitle: `$${subtitle}`,
        media: image,
      }
    },
  },
})
