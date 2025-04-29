import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-[350px]',
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  className: 'w-[350px]',
};

export const WithImage = Template.bind({});
WithImage.args = {
  className: 'w-[350px]',
  children: (
    <>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>This card includes an image</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
            alt="Sample"
            className="h-full w-full object-cover"
          />
        </div>
      </CardContent>
    </>
  ),
}; 