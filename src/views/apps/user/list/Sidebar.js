import {useEffect, useState} from "react"

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import {Button, FormGroup, Label, FormText} from 'reactstrap'
import {AvForm, AvInput} from 'availity-reactstrap-validation-safe'

const SidebarNewUsers = ({open, toggleSidebar}) => {
    const [data, setData] = useState(null)
    // ** Function to handle form submit
    const onSubmit = (event, errors, values) => {
        if (!errors.length) {
            toggleSidebar()
            setData(values)
        }
        event.preventDefault()
    }

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])
    return (
        <Sidebar
            size='lg'
            open={open}
            title='کاربر جدید'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            <AvForm onSubmit={onSubmit}>
                <FormGroup>
                    <Label for='userid'>User id</Label>
                    <AvInput name='userid' id='userid' placeholder='John Doe' required/>
                    <FormText color='muted'>شناسه کاربر در سامانه احراز هویت</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='walletid'>Wallet id</Label>
                    <AvInput name='walletid' id='walletid' placeholder='johnDoe99' required/>
                    <FormText color='muted'>شناسه کیف پول</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='pocketid'>Pocket id</Label>
                    <AvInput name='pocketid' id='pocketid' placeholder='johnDoe99' required/>
                    <FormText color='muted'>شناسه پاکت</FormText>
                </FormGroup>
                {/*<FormGroup>*/}
                {/*    <Label for='email'>ایمیل</Label>*/}
                {/*    <AvInput type='email' name='email' id='email' placeholder='john.doe@example.com'*/}
                {/*             required/>*/}
                {/*    <FormText color='muted'>میتوانید از حروف، اعداد و نقطه استفاده کنید</FormText>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*    <Label for='country'>کشور</Label>*/}
                {/*    <AvInput name='country' id='country' placeholder='Australia' required/>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*    <Label for='contact'>ارتباط</Label>*/}
                {/*    <AvInput name='contact' id='contact' placeholder='(397) 294-5153' required/>*/}
                {/*</FormGroup>*/}
                <FormGroup>
                    <Label for='vehicle'>Vehicle</Label>
                    <AvInput type='select' id='vehicle' name='vehicle' required>
                        <option value='subscriber'>1</option>
                        <option value='author'>2</option>
                        <option value='author'>3</option>
                    </AvInput>
                    <FormText color='muted'>خودرو</FormText>
                </FormGroup>

                <FormGroup>
                    <Label for='degree'>Degree</Label>
                    <AvInput type='select' id='degree' name='degree' required>
                        <option value='subscriber'>بی سواد</option>
                        <option value='editor'>زیر دیپلم</option>
                        <option value='maintainer'>دیپلم</option>
                        <option value='author'>فوق دیپلم</option>
                        <option value='author'>لیسانس</option>
                        <option value='author'>فوق لیسانس</option>
                        <option value='author'>دکترا</option>
                        <option value='author'>دکترا حرفه ای</option>
                    </AvInput>
                    <FormText color='muted'>مدرک</FormText>
                </FormGroup>


                <FormGroup>
                    <Label for='user-role'>User role</Label>
                    <AvInput type='select' id='user-role' name='user-role' required>
                        <option value='unknown'>نامشخص</option>
                        <option value='driver'>راننده</option>
                        <option value='expert'>کارشناس</option>
                        <option value='customer'>مشتری</option>
                    </AvInput>
                    <FormText color='muted'>نوع کاربر</FormText>
                </FormGroup>

                <FormGroup>
                    <Label for='guarantee-accepted'>Guarantee accepted</Label>
                    <AvInput type='select' id='guarantee-accepted' name='guarantee-accepted'
                             required>
                        <option value='unknown'>نامشخص</option>
                        <option value='yes'>بله</option>
                        <option value='no'>خیر</option>
                    </AvInput>
                    <FormText color='muted'>تایید ضمانت نامه توسط مدیر</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='guarantee-value'>Guarantee value</Label>
                    <AvInput type='number' name='guarantee-value' id='guarantee-value' placeholder='johnDoe99' required/>
                    <FormText color='muted'>ارزش ضمانت نامه
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label for='license-plate'>License plate</Label>
                    <AvInput name='license-plate' id='license-plate' placeholder='johnDoe99' required/>
                    <FormText color='muted'>پلاک خودرو
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label for='national-code'>National code</Label>
                    <AvInput name='national-code' id='national-code' placeholder='johnDoe99' required/>
                    <FormText color='muted'>کد ملی</FormText>
                </FormGroup>

                {/*<FormGroup className='mb-2'>*/}
                {/*    <Label for='select-plan'>انتخاب سرویس</Label>*/}
                {/*    <AvInput type='select' id='select-plan' name='select-plan' required>*/}
                {/*        <option value='basic'>ساده</option>*/}
                {/*        <option value='enterprise'>اینترپرایز</option>*/}
                {/*        <option value='company'>کمپانی</option>*/}
                {/*        <option value='team'>تیم</option>*/}
                {/*    </AvInput>*/}
                {/*</FormGroup>*/}
                <FormGroup>
                    <Label for='driver-type'>Driver type</Label>
                    <AvInput type='select' id='driver-type' name='driver-type' required>
                        <option value='unknown'>نامشخص</option>
                        <option value='passenger'>مسافربر</option>
                        <option value='porter'>باربر</option>
                    </AvInput>
                    <FormText color='muted'>نوع راننده </FormText>
                </FormGroup>

                <FormGroup className='mb-2'>
                    <Label for='driver-accept-vip'>Driver accept vip</Label>
                    <AvInput type='select' id='driver-accept-vip' name='driver-accept-vip' required>
                        <option value='unknown'>نامشخص</option>
                        <option value='yes'>بله</option>
                        <option value='no'>خیر</option>
                    </AvInput>
                    <FormText color='muted'>آیا سفر vip میپذیرد؟
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label for='description'>Description</Label>
                    <AvInput name='description' id='description' placeholder='John Doe'/>
                    <FormText color='muted'>توضیحات</FormText>
                </FormGroup>

                <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
                    لغو
                </Button>
                <Button type='submit' className='ml-1' color='primary'>
                    ثبت
                </Button>
            </AvForm>
        </Sidebar>
    )
}

export default SidebarNewUsers
