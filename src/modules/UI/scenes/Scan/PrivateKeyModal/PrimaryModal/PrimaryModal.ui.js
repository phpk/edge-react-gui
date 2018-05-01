// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import { sprintf } from 'sprintf-js'
import type { EdgeParsedUri } from 'edge-core-js'

import { InteractiveModal, PrimaryButton, SecondaryButton } from '../../../../components/Modals'
import { Icon } from '../../../../components/Icon/Icon.ui'
import s from '../../../../../../locales/strings'

export type Props = {
  isVisible: boolean,
  onAccept: () => void,
  onBackButtonPress: () => void,
  onBackdropPress: () => void,
  onReject: () => void,
  parsedUri: EdgeParsedUri | null
}
export class PrimaryModal extends Component<Props> {
  render () {
    const { onBackButtonPress, onBackdropPress, isVisible, onAccept, onReject, parsedUri } = this.props

    return (
      <InteractiveModal isVisible={isVisible} onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress}>
        <InteractiveModal.Icon>
          <Icon style={{}} type={'ionIcons'} name="ios-key" size={30} />
        </InteractiveModal.Icon>

        <InteractiveModal.Title>
          <Text>{s.strings.private_key_modal_sweep_from_private_address}</Text>
        </InteractiveModal.Title>

        <InteractiveModal.Body>
          <InteractiveModal.Description>
            <Text>{sprintf(s.strings.private_key_modal_private_key, 'Bitcoin')}</Text>
            <Text>{' with public address: '}</Text>
          </InteractiveModal.Description>
          <InteractiveModal.Description ellipsizeMode={'middle'} numberOfLines={1}>
            <Text>{parsedUri && parsedUri.publicAddress}</Text>
          </InteractiveModal.Description>
        </InteractiveModal.Body>

        <InteractiveModal.Footer>
          <InteractiveModal.Row>
            <InteractiveModal.Item>
              <PrimaryButton onPress={onAccept}>
                <PrimaryButton.Text>
                  <Text>{s.strings.private_key_modal_import}</Text>
                </PrimaryButton.Text>
              </PrimaryButton>
            </InteractiveModal.Item>

            <InteractiveModal.Item>
              <SecondaryButton onPress={onReject}>
                <SecondaryButton.Text>
                  <Text>{s.strings.private_key_modal_cancel}</Text>
                </SecondaryButton.Text>
              </SecondaryButton>
            </InteractiveModal.Item>
          </InteractiveModal.Row>
        </InteractiveModal.Footer>
      </InteractiveModal>
    )
  }
}