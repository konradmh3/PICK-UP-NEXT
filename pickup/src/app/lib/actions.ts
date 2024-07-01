'use server';

export async function createRestaurant(formData: FormData){
    const rawFormData = {
        name: formData.get('restaurant'),
        phone: formData.get('phone'),
        address: formData.get('address')
    };
    console.log(rawFormData);
}

export async function createMenuItem(formData: FormData){
    const rawFormData = {
        restaurantId: formData.get('restaurantId'),
        menuitem: formData.get('menuitem'),
        customize: formData.getAll('customize'),
        amount: formData.get('amount')
    };
    console.log(rawFormData);
}